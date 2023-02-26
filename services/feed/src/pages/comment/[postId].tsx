import CommentBox from '../../comment/components/CommentBox';
import styled from '@emotion/styled';
import { FlexCol } from '../../common/components/Flexbox';
import ContentDetail from '../../comment/components/ContentDetail';

const Comment = () => {
    return (
        <CommentContainer fullWidth>
            <ContentDetail
                content="fajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdffajhdf"
                createAt="안녕"
                name="너말언"
                profileSrc=""
            />
            <FlexCol gap={16} fullWidth>
                <CommentBox
                    comment="ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언"
                    createAt="dkfjak"
                    name="dajfkjs"
                    profileSrc=""
                />
                <CommentBox
                    comment="ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언"
                    createAt="dkfjak"
                    name="dajfkjs"
                    profileSrc=""
                />
                <CommentBox
                    comment="ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언"
                    createAt="dkfjak"
                    name="dajfkjs"
                    profileSrc=""
                />
                <CommentBox
                    comment="ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언ㅇ머ㅏㄹ언"
                    createAt="dkfjak"
                    name="dajfkjs"
                    profileSrc=""
                />
            </FlexCol>
        </CommentContainer>
    );
};

const CommentContainer = styled(FlexCol)`
    > * + * {
        border-top: 1px solid ${({ theme }) => theme.colors.gray300};
    }
`;

export default Comment;
