import { JsonObject, BaseLinks } from './types';
import { getDate } from './helpers';

export interface ProjectLinks extends BaseLinks {
  thumbnail?: string;
  access: string;
  blocks: string;
  team: string;
  manifest?: string;
}

export interface PartialProject {
  team: string;
  name: string;
  title: string;
  description: string;
  visibility: ProjectVisibility;
}

export type ProjectId = string;

export enum ProjectVisibility {
  'public' = 'public',
  'manifest' = 'manifest',
  'private' = 'private',
}

export interface Project extends PartialProject {
  id: ProjectId;
  created_by: string;
  date_created: Date;
  date_modified: Date;
  links: ProjectLinks;
}

export function projectFromDTO(projectId: ProjectId, json: JsonObject): Project {
  return {
    id: projectId,
    team: json.team ?? '',
    name: json.name ?? '',
    created_by: json.created_by ?? '',
    title: json.title ?? '',
    description: json.description ?? '',
    visibility: json.visibility ?? ProjectVisibility.private,
    date_created: getDate(json.date_created),
    date_modified: getDate(json.date_modified),
    links: { ...json.links },
  };
}

export function cleanProjectForPosting(project: Project): Record<keyof PartialProject, any> {
  return {
    team: project.team,
    name: project.name,
    title: project.title,
    description: project.description,
    visibility: project.visibility,
  };
}