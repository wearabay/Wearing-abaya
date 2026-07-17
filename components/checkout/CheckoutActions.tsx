import Button from "@/components/ui/Button";

export default function CheckoutActions() {
  return (
    <div className="space-y-4">
      <Button fullWidth={true}>
  Continue to Payment
</Button>

      <p className="text-center text-xs text-neutral-500">
        Secure payment powered by our payment partner.
      </p>
    </div>
  );
}