import GroupInterface from "./GroupInterface";

interface StudentInterface {
  id: number;
  uuid?: string;
  firstName: string;
  lastName: string;
  middleName: string;
  contacts: string;
  groupId: number;
  isDeleted?: boolean;
  isNew?: boolean;
  group?: GroupInterface | null;
};

export default StudentInterface;