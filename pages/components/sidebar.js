import { AiFillGithub,AiFillLinkedin, AiFillGitlab } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
    return(
        <div>
            <img
                src="/profile-min.png"
                alt="user avatar"
                className="w-32 h-32 mx-auto rounded-full"
             />
            <h3 className="flex items-center justify-center my-4 text-3xl font-medium tracking-wider font-Roboto">
                <span>Evans Gacheru</span>
            </h3>
            <p className="flex items-center justify-center px-2 py-1 my-4 rounded-full bg-sky-100 font-Roboto">Software Engineer</p>
            <a 
                className="flex items-center justify-center px-2 py-1 my-3 rounded-full bg-sky-100 font-Roboto"
                href="#"
                download="name"
            >
                <GiTie className="w-6 h-6"/>Download Resume
                </a>
            {/* social icons */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-sky-600 md:w-full">
                <a href="#"><AiFillGithub className="w-8 h-8"/></a>
                <a href="#"><AiFillLinkedin className="w-8 h-8"/></a>
                <a href="#"><AiFillGitlab className="w-8 h-8"/></a>
            </div>
            {/* address */}
            <div 
                className="py-4 my-5 bg-sky-100 font-Roboto" 
                style={{ marginLeft: "-1rem",marginRight: "-1rem" }}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Nairobi, Kenya</span>
                </div>
                <p className="my-2">gacheruevans0@gmail.com</p>
                <p className="my-2">+254 720 851 489</p>
            </div>
            {/* Email Button */}
            <button className="w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-sky-600 to-sky-400 font-Roboto">Email Me</button>
            <button className="w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-sky-600 to-sky-400 font-Roboto">Toggle Theme</button>
        </div>
    )
}
export default Sidebar;