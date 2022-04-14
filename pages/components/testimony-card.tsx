/* eslint-disable @next/next/no-img-element */

type TestimonyCardProps = {
    name: string;
    description: string;
    userImage: string;
}
export function TestimonyCard(props: TestimonyCardProps) {
    return (
        <div className="p-8 rounded-xl bg-background-fg flex flex-col hover:brightness-90 transition-all duration-300">
            <img
                className="w-10 mb-8"
                src="assets/icons/chat.svg" 
                alt="Chat icon" 
            />
            <p className="text-text-body text-base text-ellipses overflow-clip">
                &quot;
                <i>
                    {props.description}
                </i>
                &quot;
            </p>

            <div className="flex gap-4 items-center mt-6">
                <img
                    className="rounded-full h-10 w-10"
                    src={`${props.userImage}`}
                    alt="Profile avatar image" 
                />
                <span>
                    <p className="text-text-title font-medium">
                        {props.name}
                    </p>
                </span>
            </div>
        </div>
    )
}