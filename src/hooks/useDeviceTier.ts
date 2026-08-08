import { useState, useEffect } from 'react';

type DeviceTier = 'high' | 'low';

/**
 * Basic GPU/device capability check.
 * Returns 'low' for devices that should skip WebGL rendering.
 */
export function useDeviceTier(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>('high');

  useEffect(() => {
    // Check hardware concurrency
    const cores = navigator.hardwareConcurrency || 2;
    if (cores < 4) {
      setTier('low');
      return;
    }

    // Basic WebGL context test
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) {
        setTier('low');
        return;
      }

      // Check for basic GPU capability via renderer string
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        // Flag known software renderers as low tier
        if (renderer && (
          renderer.includes('SwiftShader') ||
          renderer.includes('llvmpipe') ||
          renderer.includes('Software')
        )) {
          setTier('low');
          return;
        }
      }

      setTier('high');
    } catch {
      setTier('low');
    }
  }, []);

  return tier;
}
