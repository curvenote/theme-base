import { JsonObject } from '../types';
import { BaseVersion, KINDS, NavigationFormatTypes, NavListItemDTO } from './types';

export interface PartialNavigation {
  items: NavListItemDTO[];
}

export interface Navigation extends BaseVersion, PartialNavigation {
  kind: typeof KINDS.Navigation;
}

export const defaultFormat = NavigationFormatTypes.json;

export function fromDTO(dto: JsonObject): PartialNavigation {
  if (!dto.items) return { items: [] };

  return {
    items:
      dto.items.map((item: NavListItemDTO) => ({
        id: item.id ?? '',
        parentId: item.parentId ?? null,
        title: item.title ?? '',
        blockId: item.blockId ?? null,
      })) ?? [],
  };
}

export function createEmptyNavigation(): PartialNavigation {
  return {
    items: [] as NavListItemDTO[],
  };
}