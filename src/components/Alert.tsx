import React from 'react';
import useTheme from '../hooks/useTheme';
import { classNames } from '../utils';

import InfoIcon from './icons/Info';
import CheckIcon from './icons/Check';
import ErrorIcon from './icons/Error';
import WarningIcon from './icons/Warning';

const styles = {
  light: {
    error: '!text-red-800/80',
    success: '!text-green-800/80 !bg-green-400/20',
    warning: 'bg-yellow-50/90 text-ochre-900',
    info: 'bg-blue-50/90 text-blue-900',
  },
  dark: {
    error: '!text-red-300',
    success: '!text-green-300 !bg-green-900/30',
    warning: 'text-ochre-300 bg-ochre-900/10',
    info: '!text-blue-300 !bg-blue-800/20 ',
  },
};

const Alert = (props: AlertProps) => {
  const { children, icon = true, type, className: additionalClassName } = props;
  const { theme } = useTheme();
  const colors = styles[theme];

  let Icon;

  if (type === 'info') Icon = InfoIcon;
  else if (type === 'success') Icon = CheckIcon;
  else if (type === 'error') Icon = ErrorIcon;
  else Icon = WarningIcon;

  return (
    <div
      className={classNames(
        'border-[1px] rounded-md text-base w-full p-2 px-4 mb-4',
        icon && 'pl-3',
        type === 'error' && '!bg-red-900/10 border-red-400/50 ' + colors.error,
        type === 'success' && 'border-green-400/50 ' + colors.success,
        type === 'warning' && ' border-ochre-800 ' + colors.warning,
        type === 'info' && ' border-blue-400 ' + colors.info,
        additionalClassName
      )}
    >
      <div className="flex items-center w-full">
        <div className="flex justify-between items-center">
          {icon && <Icon className="!w-[50px] !min-w-min !h-8 mr-0" />}
          <div className={'w-5/5'}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
export interface AlertProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'type'> {
  icon?: boolean;
  type: 'info' | 'success' | 'warning' | 'error';
}
