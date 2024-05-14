export interface Product {
    id: string;
    volumeInfo: {
      title: string;
      subtitle: string;
      authors: string[];
      description: string;
      imageLinks: {
        thumbnail: string;
        smallThumbnail: string;
      };
    };
  }

  export interface ResourceSubCategoryReportInterface {
    createdAt : string,
    createdBy : null,
    id: string
    isActive: boolean
    link: string,
    name : string, 
   subCategoryId: string,
   updatedAt:string
  }