import { Time } from "@angular/common";

export class Invoice {
    id?: any;
    memo?: string;
    sender?: number;
    receiver?: number;
    amount?: number;
    token_id?: number;
    status?: string;
    createdAt?: Time;
    updatedAt?: Time;
  }