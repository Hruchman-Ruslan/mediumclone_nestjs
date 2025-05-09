import { UserType } from '@app/user/types/user.type';

type ProfileWithoutEmail = Omit<UserType, 'email'>;
export type ProfileResponseInterface = {
  profile: ProfileWithoutEmail & { following: boolean };
};
