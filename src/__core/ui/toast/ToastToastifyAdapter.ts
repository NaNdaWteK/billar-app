/* eslint-disable  @typescript-eslint/no-explicit-any */

import { toast, ToastContentProps } from 'react-toastify';
export interface ToastInterface {
  promise(
    promise: Promise<any>,
    message: { pending: string; success: string },
    options: object
  ): void;
  error(message: string, options: object): void;
}
export class ToastToastifyAdapter implements ToastInterface {
  promise(
    promise: Promise<any>,
    message: { pending: string; success: string },
    options = {}
  ) {
    toast.promise(promise, {
      pending: message.pending,
      success: {
        render() {
          return message.success;
        },
        icon: '🟢',
      },
      error: {
        render({ data }: ToastContentProps<{ message: string }>) {
          return data?.message;
        },
      },
    });
  }
  error(message: string, options = {}) {
    toast.error(message);
  }
}
