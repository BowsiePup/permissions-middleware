import { bits } from 'discord-rose/dist/utils/Permissions'
import { CommandContext } from "discord-rose/dist/structures/CommandContext";

type bitKey = (keyof typeof bits)[]

declare module 'discord-rose/dist/typings/lib' {
  interface CommandOptions {
    /**
     * Whether or not the executing user has said permissions
     */
    userPerms?: bitKey
    /**
     * Whether or not the bot has said permissions
     */
    myPerms?: bitKey
  }
}

type humanReadableBits = {
  createInvites?: string;
  kick?: string;
  ban?: string;
  administrator?: string;
  manageChannels?: string;
  manageGuild?: string;
  addReactions?: string;
  auditLog?: string;
  prioritySpeaker?: string;
  stream?: string;
  viewChannel?: string;
  sendMessages?: string;
  tts?: string;
  manageMessages?: string;
  embed?: string;
  files?: string;
  readHistory?: string;
  mentionEveryone?: string;
  externalEmojis?: string;
  viewInsights?: string;
  connect?: string;
  speak?: string;
  mute?: string;
  deafen?: string;
  move?: string;
  useVoiceActivity?: string;
  nickname?: string;
  manageNicknames?: string;
  manageRoles?: string;
  webhooks?: string;
  emojis?: string;
}

type msgFunction = (ctx: CommandContext) => string

declare const _default: (opts?: {
  /**
   * Object of readable strings mapped to permissions bit strings or function for dynamic readable conversion
   */
  humanReadable?: humanReadableBits | ((ctx: CommandContext, p: (keyof typeof bits)[]) => string)
  /**
   * Message that returns if bot requires permissions
   */
  my?: msgFunction,
  /**
   * Message that returns if user requrires permissions
   */
  user?: msgFunction
  /**
   * Have the error return as a rose error or sent in plaintext
   */
  sendAsRoseError?: boolean
  /**
   * Have the error response be a reply if sendAsRoseError is false
   */
  makeResponseAReply?: boolean
}) => (ctx: CommandContext) => boolean

export default _default

/**
 * A JSON of the default provided bits
 */
export const humanReadable: {
  key: (keyof typeof bits)[],
  value: string
}