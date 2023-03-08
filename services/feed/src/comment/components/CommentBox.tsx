import { ComponentProps } from 'react';
import styled from '@emotion/styled';
import { Body2 } from '@semicolondsm/ui';
import { FlexCol, FlexRow } from '../../common/components/Flexbox';
import ProfileImage from '../../common/components/profile/ProfileImage';
import KababButton from '../../common/components/KababButton';
import ProfileContent from '../../common/components/profile/ProfileContent';
import { useMutation } from '@tanstack/react-query';
import useDeleteComment from '../hooks/useDeleteComment';
import { sendBridgeEvent } from '@shared/xbridge';
import { useRouter } from 'next/router';

interface ProfileWithCommentProps
    extends ComponentProps<typeof ProfileImage>,
        Omit<ComponentProps<typeof ProfileContent>, 'direction'> {
    comment: string;
    commentId: string;
    isMine: boolean;
}

const CommentBox = ({
    comment,
    createAt,
    name,
    profileSrc,
    commentId,
    isMine,
}: ProfileWithCommentProps) => {
    const router = useRouter();
    const { mutate: deleteMutate } = useDeleteComment(commentId);

    const menuList = ['신고', ...(isMine ? ['삭제'] : [])] as const;

    const menuAction: Record<typeof menuList[number], () => void> = {
        신고: () =>
            sendBridgeEvent(
                'navigate',
                { url: '/declare', title: '신고하기', rightButtonText: '제출' },
                () => router.push('/declare'),
            ),
        삭제: () => deleteMutate(),
    };
    return (
        <ProfileWithCommentWrapper>
            <ProfileImage profileSrc={profileSrc}></ProfileImage>
            <CommentWrapper>
                <ProfileContent direction="row" createAt={createAt} name={name || '익명'} />
                <Body2 color="gray800">{comment}</Body2>
            </CommentWrapper>
            <KababButton menu={menuList} onClick={(str) => menuAction[str]()} />
        </ProfileWithCommentWrapper>
    );
};

const ProfileWithCommentWrapper = styled(FlexRow)`
    width: 100%;
    padding: 12px 16px;
    align-items: flex-start;
`;

const CommentWrapper = styled(FlexCol)`
    gap: 2px;
    flex: 1;
    padding-left: 12px;
`;

const CommentSection = styled.section`
    color: ${({ theme }) => theme.colors.gray800};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;

export default CommentBox;
