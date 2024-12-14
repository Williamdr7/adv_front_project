
export interface Pageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: Sort;
  unpaged: boolean;
}

interface Order {
  ascending: boolean;
  descending: boolean;
  direction: "ASC" | "DESC";
  ignoreCase: boolean;
  nullHandling: "NATIVE" | "NULLS_FIRST" | "NULLS_LAST";
  property: string;
}

export interface Sort {
  empty: boolean;
  orders: Order[];
  sorted: boolean;
  unsorted: boolean;
}

export type Pagination = {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable?: Pageable;
  size: number;
  sort?: Sort;
  totalElements: number;
  totalPages: number;
};

export interface AggregationResponse {
  name: string;
  value: any;
}

export type PageResponse<T> = {
  aggregations?: AggregationResponse[];
  content: T;
} & Pagination;

export interface ContractLengthResponse {
  id: string;
  total_months: number;
}

export interface KilometerCapResponse {
  description: string;
  id: string;
  max_kilometers: number;
}

export interface EnumsResponse {
  contract_lengths: ContractLengthResponse[];
  kms: KilometerCapResponse[];
  min_max_price: {
    max_price: number;
    min_price: number;
  };
}

export interface ContractLengthModel {
  id: string;
  totalMonths: number;
}

export interface KilometerCapModel {
  id: string;
  description: string[];
  maxKilometers: number;
}

export interface EnumsModel {
  contractLengths: ContractLengthModel[];
  kilometerCaps: KilometerCapModel[];
  minMaxPrice: [number, number];
}

export interface CategoriesResponse {
  description: string;
  id: string;
  name: string;
  eligible_for_armoured: boolean;
  vehicle_transmission: string;
  image: string;
  popular_vehicles: string[];
  price: {
    max_price: number;
    min_price: number;
  };
}

export interface CategoriesModel {
  description: string;
  id: string;
  name: string;
  image: string;
  popularVehicles: string[];
  price: {
    maxPrice: number;
    minPrice: number;
  };
  armour: boolean;
  gear: string;
}

export interface AccessoryResponse {
  catalog_accessory_id: string;
  name: string;
}

export interface SizeModel {
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}

export interface FileResponse {
  create_at: string;
  format: string;
  id: string;
  order: number;
  reference_id: string;
  sizes: SizeModel;
  type: string;
  url: string;
}

export type AdvertiseFileResponse = Pick<
  FileResponse,
  "format" | "id" | "order" | "reference_id" | "type" | "url"
> & {
  active: boolean;
};

export interface PortalResponse {
  brand_id: string;
  brand_name: string;
  id: string;
  installments_value: number;
  model_id: string;
  model_name: string;
  plan_id: string;
  plan_name: string;
  price: 0;
  source: string;
  status: string;
  version_id: string;
  version_name: string;
}
export interface AdvertiseResponse {
  id: string;
  ad_reference: string;
  create_at: string;
  description: string;
  status: string;
  files: AdvertiseFileResponse[];
  portals: PortalResponse[];
}

export interface StateResponse {
  id: number;
  initials: string;
  name: string;
}
export interface CityResponse {
  id: number;
  name: string;
  state: StateResponse;
}

export interface EquipmentResponse {
  catalog_equipment_id: string;
  name: string;
}

export interface ObservationResponse {
  catalog_accessory_id: string;
  name: string;
}

export interface StoreResponse {
  id: string;
  name: string;
}

export interface TagResponse {
  id: string;
  tag: string;
}

export interface VehicleModelResponse {
  auto_transmission: boolean;
  brand_logo: "string";
  brand_name: "string";
  id: "string";
  name: "string";
}

export interface AccessoryModel {
  catalogAccessoryId: string;
  name: string;
}

export interface FileModel {
  createAt: string;
  format: string;
  id: string;
  order: 0;
  referenceId: string;
  sizes: SizeModel;
  type: string;
  url: string;
}

export type AdvertiseFileModel = Pick<
  FileModel,
  "format" | "id" | "order" | "referenceId" | "type" | "url"
> & {
  active: boolean;
};

export interface PortalModel {
  brandId: string;
  brandName: string;
  id: string;
  installmentsValue: 0;
  modelId: string;
  modelName: string;
  planId: string;
  planName: string;
  price: 0;
  source: string;
  status: string;
  versionId: string;
  versionName: string;
}

export interface AdvertiseModel {
  id: string;
  ad_reference: string;
  create_at: string;
  description: string;
  status: string;
  files: AdvertiseFileModel[];
  portals: PortalModel[];
}

export interface CityModel {
  id: number;
  name: string;
  state: StateResponse;
}

export interface EquipmentModel {
  catalogEquipmentId: string;
  name: string;
}

export interface ObservationModel {
  catalogAccessoryId: string;
  name: string;
}

export interface TagModel {
  id: string;
  tag: string;
}

export interface StoreModel {
  id: string;
  name: string;
}

export interface VehicleModelModel {
  autoTransmission: boolean;
  image: "string";
  brand: "string";
  id: "string";
  name: "string";
}

export interface VehicleModelParams {
  armoured: boolean;
  auto_transmission?: boolean;
  category_id?: string;
  max_price?: number;
  min_price?: number;
}

export type PriceSimulationResponse = {
  kilometer_cap: number;
  kms_id: string;
  months: number;
  months_id: string;
  price: {
    max_price: number;
    min_price: number;
  };
};

export type PriceSimulationModel = {
  kilometerCap: number;
  kmsId: string;
  months: number;
  monthsId: string;
  price: {
    maxPrice: number;
    minPrice: number;
  };
};

export interface PriceSimulationParams {
  category_id?: string;
  kilometer_cap_id?: string;
  model_ids?: string;
}

export interface OriginModel {
  type?: string;
  content?: any;
}

export interface VehicleModel {
  category: string;
  brand: string;
  kilometer_cap: number;
  armoured: true;
  months: number;
  price: number;
  model: string;
  auto_transmission: true;
}
export interface PostSignatureBody {
  opportunity_id?: string | null;
  amount?: number | null;
  origin?: OriginModel;
  tags_id?: string[] | null;
  lead?: {
    type?: string | null;
    business_name?: string | null;
    name?: string | null;
    email?: string | null;
    company_tax_id?: string | null;
    phone?: string | null;
    tax_id?: string | null;
  } | null;
  products_id?: string[];
  user_id?: string | null;
}

export interface PostSignatureResponse {
  amount: number;
  board_id: string;
  board_step_id: string;
  company_id: string;
  company_name: string;
  created_at: string;
  id: string;
  reference_code: number;
  status: string;
  store_id: string;
  store_name: string;
  updated_at: string;
  user_id: string;
  opportunity_id: string;
}

export interface PostSignatureModel {
  amount: number;
  boardId: string;
  boardStepId: string;
  companyId: string;
  companyName: string;
  createdAt: string;
  id: string;
  referenceCode: number;
  status: string;
  storeId: string;
  storeName: string;
  updatedAt: string;
  userId: string;
}

export type FormPreferenceModel = "model" | "price";

export type FormGearModel = "ALL" | "MANUAL" | "AUTOMATIC";

export type FormStateModel = {
  preferences: {
    mensality: {
      value?: [number, number];
      range: [number, number];
    };
    gear?: FormGearModel;
  };
  model: {
    model?: CategoriesModel;
    hasSpecificModels: boolean;
    specificModels: VehicleModelModel[];
    selectedModels: VehicleModelModel[];
    armored?: boolean;
    loaders: {
      specificModels: boolean;
    };
  };
  conditions: {
    kilometers: {
      value: number;
      range: KilometerCapModel[];
    };
    duration: {
      value: ContractLengthModel["id"];
      options: {
        value: string;
        label: string;
        subLabel: string;
      }[];
    };
    priceSimulation?: PriceSimulationModel[];
    loaders: {
      priceSimulation: boolean;
    };
  };
};

export interface FormStateHandler {
  gear: (value: string) => void;
  mensality: (value: number | number[]) => void;
  model: (value: CategoriesModel | undefined) => void;
  hasSpecificModels: (value: number) => void;
  armored: (value: number) => void;
  selectedModels: (value?: VehicleModelModel) => void;
  kilometers: (value: number) => void;
  duration: (value: string) => void;
}

export interface FormStateClear {
  preferences: VoidFunction;
  model: VoidFunction;
  conditions: VoidFunction;
  data: VoidFunction;
}


