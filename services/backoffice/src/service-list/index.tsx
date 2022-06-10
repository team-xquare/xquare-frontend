import ServiceItem from './ServiceItem';
import styled from '@emotion/styled';

const ServiceList = () => {
    return (
        <ServiceListContainer>
            {Array(50)
                .fill(-1)
                .map((item) => (
                    <ServiceItem />
                ))}
        </ServiceListContainer>
    );
};

export default ServiceList;

const ServiceListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;
