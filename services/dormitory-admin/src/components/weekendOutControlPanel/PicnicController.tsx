import { Button, Select } from '@semicolondsm/ui';
import { useAcceptPicnic, useArrivePicnic, useRefusePicnic } from '../../apis/apply';
import { SelectedPicnicType } from '../../apis/types';
import { picnicType } from '../../pages/weekend-out';
import { Flex } from '../common/Flex';

interface PicnicControllerProps {
    onClickMultiSelected: () => void;
    isMultiSelected: boolean;
    picnicTypeState: typeof picnicType[number];
    setPicnicTypeState: (value: typeof picnicType[number]) => void;
    selectedPicnicIds: SelectedPicnicType;
}

const PicnicController = ({
    isMultiSelected,
    onClickMultiSelected,
    picnicTypeState,
    setPicnicTypeState,
    selectedPicnicIds,
}: PicnicControllerProps) => {
    const { mutate: acceptMutate } = useAcceptPicnic();
    const { mutate: refuseMutate } = useRefusePicnic();
    const { mutate: arriveMutate } = useArrivePicnic();
    return (
        <Flex justify="space-between" fullWidth padding={'16px 24px'}>
            <Flex gap={12}>
                <Select
                    items={picnicType}
                    value={picnicTypeState}
                    onChange={setPicnicTypeState}
                    placeholder=""
                />
                <Button size="sm" fill="border" onClick={onClickMultiSelected}>
                    {isMultiSelected ? '다중 선택 취소' : '다중 선택'}
                </Button>
            </Flex>
            <Flex gap={12}>
                {picnicTypeState === '대기 학생' ? (
                    <>
                        <Button size="sm" onClick={() => refuseMutate(selectedPicnicIds)}>
                            거절하기
                        </Button>
                        <Button
                            size="sm"
                            fill="purple"
                            onClick={() => acceptMutate(selectedPicnicIds)}>
                            수락하기
                        </Button>
                    </>
                ) : (
                    <Button size="sm" fill="purple" onClick={() => arriveMutate(selectedPicnicIds)}>
                        복귀하기
                    </Button>
                )}
            </Flex>
        </Flex>
    );
};

export default PicnicController;
