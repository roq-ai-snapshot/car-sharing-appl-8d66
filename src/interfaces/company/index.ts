import { TeamMemberInterface } from 'interfaces/team-member';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  team_member?: TeamMemberInterface[];

  _count?: {
    team_member?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
  name?: string;
  tenant_id?: string;
}
