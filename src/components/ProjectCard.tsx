import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../types';
import TerminalWindowCard from './ui/TerminalWindowCard';
import TerminalButton from './ui/TerminalButton';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const rotations = [-1.5, 2, -2, 1.5, -1, 2.5];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const fileExt = project.techStack.includes('Python') || project.techStack.includes('YOLOv8') ? '.py' : '.tsx';
  const fileName = `${project.id.replace(/[^a-z0-9]/g, '_')}${fileExt}`;

  return (
    <TerminalWindowCard
      title={fileName}
      index={index}
      floatDelay={(index % 3) as 0 | 1 | 2}
      initialRotate={rotations[index % rotations.length]}
      badge={project.badge || 'PROJECT'}
      className="h-full flex flex-col group cursor-pointer"
    >
      <div className="flex flex-col h-full">
        {/* Title */}
        <div className="mb-3">
          <h3 className="font-mono text-base md:text-lg font-bold text-text-primary group-hover:text-cyan-bright transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="font-mono text-[11px] text-text-mono-dim mt-1">{project.date}</p>
        </div>

        {/* Pseudo Code Snippet Block */}
        <div className="mb-4 p-3 rounded-lg border border-glass-border bg-void/60 font-mono text-[11px] space-y-1">
          <div className="text-text-mono-dim">
            <span className="code-keyword">import</span> <span className="code-string">"{project.techStack[0] || 'React'}"</span>
          </div>
          <div className="text-text-mono-dim">
            <span className="code-keyword">const</span> <span className="code-function">project</span> = <span className="code-keyword">new</span> Solution({'{'}
          </div>
          <div className="pl-3 text-text-secondary line-clamp-2">
            description: <span className="code-string">"{project.description}"</span>
          </div>
          <div className="text-text-mono-dim">{'}'});</div>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-5 flex-grow">
          <div className="font-mono text-[11px] text-text-mono-dim mb-2">
            {'>'} tech_stack:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="font-mono text-[10px] px-2 py-0.5 rounded border border-glass-border text-text-secondary group-hover:border-cyan-bright/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto pt-2 border-t border-glass-border">
          {project.githubUrl && (
            <TerminalButton
              variant="primary"
              href={project.githubUrl}
              icon={<Github size={13} />}
              className="flex-1 text-xs py-2"
            >
              VIEW_REPO
            </TerminalButton>
          )}
          {project.liveUrl && project.liveUrl !== project.githubUrl && (
            <TerminalButton
              variant="secondary"
              href={project.liveUrl}
              icon={<ExternalLink size={13} />}
              className="flex-1 text-xs py-2"
            >
              LIVE_DEMO
            </TerminalButton>
          )}
        </div>
      </div>
    </TerminalWindowCard>
  );
};

export default ProjectCard;
