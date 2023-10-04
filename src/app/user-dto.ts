export interface UserDao {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  emailAddress:string;
  myUploadVideos: Array<string>;
  subscribers: Array<string>;
  videoHistory: Array<string>;
  likedVideos: Array<string>;

}
