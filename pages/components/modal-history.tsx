import { SocialLinks } from "./social-links"

/* eslint-disable @next/next/no-img-element */
type ModalHistoryProps = {
    onClose: () => void
}

export function ModalHistory({ onClose }: ModalHistoryProps) {
    return (
      <div
      onClick={onClose}
      className="
        bg-modal-bg
        z-50
        backdrop-blur-sm
        flex
        fixed
        top-0
        left-0
        right-0
        bottom-0
        items-center
        justify-center"
      >
          <div className="bg-background-fg w-[40%] rounded-xl px-6 py-9">
            <header className="flex items-center justify-between">
                <img
                    className="rounded-full h-12 w-12"
                    src="https://github.com/NitoBa.png" 
                    alt="Profile avatar image" 
                />
                <img
                    onClick={onClose}
                    className="cursor-pointer hover:scale-125 transition-all duration-300"
                    src="assets/icons/close.svg"
                    alt="Close icon" />
            </header>

            <section className="mt-8">
                <p className="text-text-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique impedit autem reiciendis repellendus deleniti sit, quis, eligendi expedita placeat iusto saepe quod explicabo earum quaerat assumenda delectus harum deserunt perferendis?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, eius odio. Quaerat quas reprehenderit modi praesentium, nemo sint minima temporibus beatae fugit fuga nihil saepe exercitationem sit aperiam perspiciatis optio.
                </p>
                <p className="text-text-body mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quos non ratione, aperiam dolorum asperiores vel amet saepe. Quibusdam id exercitationem consequatur expedita, rem officiis eaque sit omnis totam sint?
                </p>
            </section>
            <div className="mt-12">
                <SocialLinks />
            </div>
          </div>
      </div>
    )
}