import { useRouter } from 'next/dist/client/router';
import Link, { LinkProps } from 'next/link';
import React, { Children, CSSProperties, FC } from 'react';

interface Props extends LinkProps {
    children: any;
    activeClassName: string;
}
const ActiveLink: FC<Props> = ({ children, activeClassName, ...props }) => {
    const { asPath } = useRouter();
    const child = Children.only(children);
    const childClassName = children.props.className || '';
    const className =
        asPath === props.href || asPath === props.as
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName;

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    );
};

export default ActiveLink;
