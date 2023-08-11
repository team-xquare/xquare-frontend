import styled from '@emotion/styled';
import { FlexCol, FlexRow } from '../Flex';
import { LogoProps } from './Logo.types';
import { Spacing } from './Spacing';
import { Symbol } from './Symbol';
import { Wordmark } from './Wordmark';

export const Logo = ({
    symbol = true,
    wordmark = true,
    height = 40,
    serviceName,
    ...props
}: LogoProps) => {
    return (
        <FlexRow {...props}>
            {symbol && <Symbol height={height} />}
            {symbol && wordmark && <Spacing height={height * 0.7} />}
            {serviceName
                ? wordmark && (
                      <FlexCol justify="space-between">
                          <Wordmark height={height * 0.45} />
                          <ServiceName height={height * 0.35}>{serviceName}</ServiceName>
                      </FlexCol>
                  )
                : wordmark && <Wordmark height={height * 0.7} />}
        </FlexRow>
    );
};

const ServiceName = styled.div<{ height: number }>`
    font-size: ${({ height }) => height}px;
`;
