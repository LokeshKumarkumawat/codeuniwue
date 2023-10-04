export interface VideoDto {
  id: string;
  title: string;
  description: string;
  userSub: string;
  userId:string;
  userName:string;
  tags: Array<string>;
  videoUrl: string;
  videoStatus: string;
  thumbnailUrl: string;
  likeCount: number;
  dislikeCount: number;
  viewCount: number;
}
