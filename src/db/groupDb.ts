import type GroupInterface from '@/types/GroupInterface';
import AppDataSource, { dbInit } from './AppDataSource';
import { Group } from './entity/Group.entity';
import type { Repository } from 'typeorm';

const groupRepository = (): Repository<Group> => AppDataSource.getRepository(Group);

/**
 * Получение групп
 * @returns  Promise<GroupInterface[]>
 */
export const getGroupsDb = async (): Promise<GroupInterface[]> => {
  // Ждём инициализации DataSource
  await dbInit();
  const repository = AppDataSource.getRepository(Group);
  return await repository.find({
    relations: ['students', 'course'],
  });
};

/**
 * Добавление группы
 * @returns  Promise<GroupInterface>
 */
export const addGroupsDb = async (groupFields: Omit<GroupInterface, 'id' | 'students' | 'course'>): Promise<GroupInterface> => {
  const group = new Group();
  await dbInit();
  const newGroup = await groupRepository().save({
    ...group,
    ...groupFields,
  });

  return newGroup;
};
