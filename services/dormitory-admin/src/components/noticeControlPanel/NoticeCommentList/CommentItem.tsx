import styled from '@emotion/styled';
import { Body3, Caption } from '@semicolondsm/ui';
import Image from 'next/image';
import { Comment } from '../../../apis/types';
import { getDateString } from '../../../libs/utils';
import KebabMenu from '../../common/KebabMenu';
import defaultProfile from '../../../assets/defaultProfile.png';
import { useDeleteComment, useDeleteNoticeMutation } from '../../../apis/notices';

const kebabItem = ['수정하기', '삭제하기'];
type KebabActionsType = Record<typeof kebabItem[number], () => void>;
interface CommentItemProps extends Comment {}

const CommentItem = ({
    comment_id,
    content,
    name,
    profile,
    updated_at,
    is_mine,
}: CommentItemProps) => {
    const { mutate: deleteMutate } = useDeleteComment(comment_id);
    const kebabMenuActions: KebabActionsType = {
        수정하기: () => {},
        삭제하기: () => deleteMutate(),
    };

    return (
        <ItemContainer>
            <CustomImage src={profile || defaultProfile} width={32} height={32}></CustomImage>
            <ContantWrapper>
                <CustomContainer>
                    <CustomBody3>{name || '사용자'}</CustomBody3>
                    <Caption>{getDateString(new Date(updated_at))}</Caption>
                </CustomContainer>
                <Body3>{content}</Body3>
            </ContantWrapper>
            {is_mine && (
                <CustomKebab
                    item={kebabItem}
                    callBack={(value) => {
                        kebabMenuActions[value]();
                    }}
                />
            )}
        </ItemContainer>
    );
};

const ItemContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    gap: 8px;
`;

const CustomImage = styled(Image)`
    border-radius: 50%;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.colors.blue300};
`;

const CustomContainer = styled.div`
    display: flex;
    gap: 4px;
`;

const ContantWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const CustomKebab = styled(KebabMenu)`
    margin-top: 4px;
`;

const CustomBody3 = styled(Body3)`
    font-weight: 500;
`;

export default CommentItem;
