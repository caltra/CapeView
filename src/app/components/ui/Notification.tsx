

export default function Notification({ status }: { status: string }) {


    return (
        <div className="flex items-center mr-2 animate-fade-text">
            {status}
        </div>
    )
}