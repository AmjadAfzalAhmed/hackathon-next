import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa'
import trans from '/public/images/yellowTrans.png'
import mark from '/public/images/mark.png'

export default function TeamMember() {
  return (
    <section className="relative py-20">
      <Image
        src={trans}
        alt="Team member background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-amber-500 opacity-70"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Team Member</h2>
          <p className="max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamCard name="Mark Henry" role="Owner" />
          <TeamCard name="Lucky Helen" role="Chef" />
          <TeamCard name="Moon Henry" role="Founder" />
          <TeamCard name="Tom Morrow" role="Specialist" />
        </div>
      </div>
    </section>
  )
}

function TeamCard({ name, role }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src={mark} alt={name} className="w-full h-auto" />
      <div className="p-4 text-center">
        <h3 className="font-semibold text-xl">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <SocialIcon Icon={FaFacebookF} />
        <SocialIcon Icon={FaTwitter} />
        <SocialIcon Icon={FaYoutube} bgColor="bg-amber-500" textColor="text-white" />
        <SocialIcon Icon={FaPinterest} />
      </div>
    </div>
  )
}

function SocialIcon({ Icon, bgColor = "bg-white", textColor = "text-black" }) {
  return (
    <div className={`w-8 h-8 ${bgColor} ${textColor} hover:bg-amber-500 hover:text-white flex items-center justify-center transition-colors`}>
      <Icon />
    </div>
  )
}

