import { Payload, badRequest, notFound } from '@hapi/boom';

export const error400 = (msg: string): Payload => badRequest(msg).output.payload;
export const error404 = (msg: string): Payload => notFound(msg).output.payload;
