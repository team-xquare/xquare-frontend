import styled from '@emotion/styled';
import { Body1, Body3, Caption } from '@semicolondsm/ui';

const ServiceItem = () => {
    return (
        <ServiceItemContainer>
            <Body3>frontend</Body3>
            <div className="header">
                <Body1>apply</Body1>
                <Badge />
            </div>
            <Body3>service.xquare.app/apply</Body3>
        </ServiceItemContainer>
    );
};

export default ServiceItem;

const Badge = () => {
    return (
        <BadgeContainer>
            <Caption fontWeight="medium" color="white">
                Allow
            </Caption>
        </BadgeContainer>
    );
};

const ServiceItemContainer = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.11);
    cursor: pointer;
    border-radius: 8px;
    width: calc(100% / 4 - 12px);
    padding: 24px;
    background-color: rgba(255, 255, 255, 0.06);
    @media screen and (max-width: 800px) {
        width: calc(100% / 3 - 12px);
    }
    @media screen and (max-width: 600px) {
        width: calc(100% / 2 - 12px);
    }
    @media screen and (max-width: 512px) {
        width: 100%;
    }
    &:hover {
        background-color: rgba(255, 255, 255, 0.06);
    }

    & .header {
        display: flex;
        gap: 6px;
        align-items: center;
    }
`;

const BadgeContainer = styled.div`
    border-radius: 4px;
    width: fit-content;
    padding: 0 6px;

    background-color: ${({ theme }) => theme.colors.indigo200};
`;
