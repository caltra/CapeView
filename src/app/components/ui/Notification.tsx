

export default function Notification({ status }: { status: string }) {


    return (
        // animate-fade-text
        <div className="flex items-center mr-2">
            {status}
        </div>
    )
}