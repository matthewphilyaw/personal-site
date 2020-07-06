
export interface CmdContainerItem {
  slug: string;
  name: string;
  cmdStyle: string;
  active: boolean;
  handler: () => void;
}
