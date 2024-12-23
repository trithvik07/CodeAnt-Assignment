import github from "../assets/github.png";
import bitbucket from "../assets/bitbucket.png";
import azure from "../assets/azure.png";
import gitlab from "../assets/gitlab.png";
import Button from "./Button";
import {useNavigate} from "react-router-dom"
export default function SaasProducts() {
    const navigate = useNavigate()
    return(
        <div className='w-[672px] gap-4 flex flex-col items-center justify-center content-center p-6'>
            <Button logo={github} content="Sign in with GitHub" onClick = {() => navigate("/")}/>
            <Button logo={bitbucket} content="Sign in with BitBucket" onClick = {() => navigate("/")}/>
            <Button logo={azure} content="Sign in with Azure" onClick = {() => navigate("/")}/>
            <Button logo={gitlab} content="Sign in with GitLab" onClick = {() => navigate("/")}/>
        </div>
    )
}