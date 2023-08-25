export interface SwitchProps {
    /** on/off 여부*/
    isOn: boolean;

    /** 클릭 이벤트 */
    onClick: () => void;

    /** 활성화/비활성화 여부 */
    disabled: boolean;
}
