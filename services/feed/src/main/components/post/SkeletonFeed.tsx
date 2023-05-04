import FlexBox, {FlexCol} from "../../../common/components/Flexbox";
import styled from "@emotion/styled";
import {keyframes} from "@emotion/react";

const Anim = keyframes`
  0% {
    background-position-x: 100%;
  }

  40%, 100% {
    background-position-x: 0;
  }
`

const ProfileContainer = styled.div`
  display: flex;
  height: 44px;
  gap: 12px;
  align-items: center;
`;

const FeedPostContainer = styled(FlexCol)`
  gap: 12px;
  width: 100%;
  padding: 16px;
`;

const SkeletonDiv = styled.div<{ width: string, height: string, border?: string, margin?: string}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.border || '0'};
  margin: ${(props) => props.margin || '0'};
  background-size: 300% 100%;
  background-image: -webkit-linear-gradient(left, #e0e0e0 30%, #f5f5f5 50%, #e0e0e0 70%);
  background-image: -o-linear-gradient(left, #e0e0e0 30%, #f5f5f5 50%, #e0e0e0 70%);
  background-image: linear-gradient(-90deg, #e0e0e0 30%, #f5f5f5 50%, #e0e0e0 70%);
  -webkit-animation: ${Anim} 2.5s infinite ease-out;
  animation: ${Anim} 2.5s infinite ease-out;
`

const SkeletonFeed = () => <FlexCol fullWidth>
    <FeedPostContainer>
        <ProfileContainer>
            <SkeletonDiv width={'40px'} height={'40px'} border={"50px"}/>
            <FlexBox
                direction={'col'}
                gap={0}
                align={'flex-start'}>
                <SkeletonDiv width={'calc(100vw - 120px)'} height={'18px'} margin={'0 0 4px 0'} border={'3px'}/>
                <SkeletonDiv width={'100%'} height={'14px'} border={'3px'}/>
            </FlexBox>
        </ProfileContainer>
        <SkeletonDiv width={'100%'} height={'210px'} border={'4px'}/>
    </FeedPostContainer>
</FlexCol>

export default SkeletonFeed;
