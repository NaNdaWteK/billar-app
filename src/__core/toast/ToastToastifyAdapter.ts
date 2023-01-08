import { toast, ToastContentProps } from 'react-toastify';

export class ToastToastifyAdapter {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  static promise(
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
  static error(message: string, options = {}) {
    toast.error(message);
  }
}
