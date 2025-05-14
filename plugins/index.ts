import {
  PUB_DELEGATION_WALL_CONTRACT_ADDRESS,
  PUB_DUAL_GOVERNANCE_PLUGIN_ADDRESS,
  PUB_TOKEN_VOTING_PLUGIN_ADDRESS,
  PUB_LOCK_TO_VOTE_PLUGIN_ADDRESS,
  PUB_OPT_MULTISIG_PLUGIN_ADDRESS,
} from "@/constants";
import { type IconType } from "@aragon/ods";

type PluginItem = {
  /** The URL fragment after /plugins */
  id: string;
  /** The name of the folder within `/plugins` */
  folderName: string;
  /** Title on menu */
  title: string;
  icon?: IconType;
  pluginAddress: string;
};

export const plugins: PluginItem[] = [
  {
    id: "token-voting",
    folderName: "tokenVoting",
    title: "Token Voting",
    // icon: IconType.BLOCKCHAIN_BLOCKCHAIN,
    pluginAddress: PUB_TOKEN_VOTING_PLUGIN_ADDRESS,
  },
  {
    id: "lock-to-vote",
    folderName: "lockToVote",
    title: "Lock to vote",
    // icon: IconType.BLOCKCHAIN_BLOCK,
    pluginAddress: PUB_LOCK_TO_VOTE_PLUGIN_ADDRESS,
  },
  {
    id: "optimistic",
    folderName: "optimistic-proposals",
    title: "Optimistic",
    // icon: IconType.APP_MEMBERS,
    pluginAddress: PUB_DUAL_GOVERNANCE_PLUGIN_ADDRESS,
  },
  {
    id: "opt-multisig",
    folderName: "opt-multisig",
    title: "Multisig (Optimistic)",
    // icon: IconType.BLOCKCHAIN_BLOCKCHAIN,
    pluginAddress: PUB_OPT_MULTISIG_PLUGIN_ADDRESS,
  },
  {
    id: "members",
    folderName: "members",
    title: "Members",
    // icon: IconType.BLOCKCHAIN_BLOCKCHAIN,
    pluginAddress: PUB_DELEGATION_WALL_CONTRACT_ADDRESS,
  },
];
