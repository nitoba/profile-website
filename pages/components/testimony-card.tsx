/* eslint-disable @next/next/no-img-element */
export function TestimonyCard() {
    return (
        <div className="p-8 rounded-xl bg-background-fg flex flex-col hover:brightness-90 transition-all duration-300">
            <img
                className="w-10 mb-8"
                src="assets/icons/chat.svg" 
                alt="Chat icon" 
            />
            <p className="text-text-body text-base line-clamp-{3} text-ellipsis">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Blanditiis corrupti ex perspiciatis ipsam maiores impedit, 
                accusamus aliquam exercitationem sequi molestiae doloremque laborum 
                deleniti beatae dolores earum doloribus illum tenetur veniam?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Blanditiis corrupti ex perspiciatis ipsam maiores impedit, 
                accusamus aliquam exercitationem sequi molestiae doloremque laborum 
                deleniti beatae dolores earum doloribus illum tenetur veniam?
            </p>

            <div className="flex gap-4 items-center mt-6">
                <img
                    className="rounded-full h-10 w-10"
                    src="https://github.com/NitoBa.png" 
                    alt="Profile avatar image" 
                />
                <span>
                    <p className="text-text-title font-medium">
                        Fulano de tal
                    </p>
                </span>
            </div>
        </div>
    )
}