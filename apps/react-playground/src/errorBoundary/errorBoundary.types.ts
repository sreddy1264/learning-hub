interface Props {
    children: React.ReactNode;
    fallback: React.ReactNode;
};
  
interface State {
    hasError: boolean;
};

export type { Props, State };