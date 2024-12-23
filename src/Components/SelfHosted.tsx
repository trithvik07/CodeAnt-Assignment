import gitlab from '../assets/gitlab.png';
import sso from "../assets/sso.png";
import Button from './Button';
import { useNavigate } from 'react-router-dom';
export default function SelfHosted() {
    const navigate = useNavigate()
    return (
        <div className='w-[672px] gap-4 flex flex-col items-center justify-center content-center p-6'>
            <Button logo={gitlab} content="Self hosted Gitlab" onClick = {() => navigate("/")}/>
            <Button logo={sso} content="Sign in with SSO" onClick = {() => navigate("/")}/>
        </div>
    )
}