export interface TacheResponseDTO {
  ref: number;
  designation: string;
  statutResponseDTO: StatutResponseDTO;
}

export interface StatutResponseDTO{
  ref: number;
  designation: string;
}

export interface StatutRequestDTO{
  ref: number;
  designation: string;
}

export interface DesignationRequestDTO{
  ref: number;
  designation: string;
}

export interface EditResponseDTO{
    ref:number;
    description:string;
    delai:Date;
    priority:boolean;
    compteResponseDTOS:CompteResponseDTO[];
}

export interface CompteResponseDTO {
  ref:number;
  nom:string;
}


