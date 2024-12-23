import gitlab from '../assets/gitlab.png';
import sso from "../assets/sso.png";
import Button from './Button';
export default function SelfHosted() {
    return (
        <div className='w-[672px] gap-4 flex flex-col items-center justify-center content-center p-6'>
            <Button logo={gitlab} content="Self hosted Gitlab"/>
            <Button logo={sso} content="Sign in with SSO"/>
        </div>
    )
}