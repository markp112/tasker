
type UserProfile = {
    _id: string;
    email: string;
    avatarUrl: string;
    nickName: string;
    firstName: string;
    surname: string;
};

const initProfile: UserProfile = {
    _id: '',
    email: '',
    avatarUrl: '',
    nickName: '',
    firstName: '',
    surname: '',
};

export { initProfile };

export type { UserProfile };
