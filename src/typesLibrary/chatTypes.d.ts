// 这个里面的content这个属性他传入的值真的就只有那么很少的一个类型吗？ 文件类型呢？
// 这个里面说不定就是可以实现一个大文件上传的编写的好时机
export type chatListIiemType = {
  headerUrl: string;
  name: string;
  content: string
}

export type UserData = {
  url: string;
  name: string;
}

export type UserInfo = {
  name: string;
  content: string
}

export interface UserListType {
  userName: string;
  age?: number;
  headImg: string;
}
