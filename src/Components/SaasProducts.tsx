import github from "../assets/github.png";
import bitbucket from "../assets/bitbucket.png";
import azure from "../assets/azure.png";
import gitlab from "../assets/gitlab.png";
import Button from "./Button";
export default function SaasProducts() {
    return(
        <div className='w-[672px] gap-4 flex flex-col items-center justify-center content-center p-6'>
            <Button logo={github} content="Sign in with GitHub"/>
            <Button logo={bitbucket} content="Sign in with BitBucket"/>
            <Button logo={azure} content="Sign in with Azure"/>
            <Button logo={gitlab} content="Sign in with GitLab"/>
        </div>
    )
}