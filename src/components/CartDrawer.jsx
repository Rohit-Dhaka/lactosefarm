import { X, Trash2, Plus, Minus, MessageCircle, ArrowRight } from "lucide-react";

const whatsappNumber = "91XXXXXXXXXX";

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    let message = "Hello Lactose Farm! I would like to place an order:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.size}) x ${item.quantity} = ₹${item.unitPrice * item.quantity}\n`;
    });
    message += `\n*Total Amount: ₹${subtotal}*\n\nPlease confirm availability and delivery slot.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[110] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full">
        {/* Responsive Drawer Container: Full width on mobile, 440px on small screens and above */}
        <div className="w-screen max-w-full sm:max-w-md bg-white shadow-2xl flex flex-col h-full">
          
          {/* Header with explicit close button */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6 sm:py-5">
            <h2 className="font-heading text-lg sm:text-xl font-bold text-text">Your Order Cart</h2>
            <button 
              type="button"
              onClick={onClose} 
              aria-label="Close cart drawer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black transition active:scale-95"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <MessageCircle size={28} />
                </div>
                <p className="text-base font-bold text-text">Your cart is empty</p>
                <p className="text-xs text-text-secondary mt-1">Add fresh milk bottles to build your order.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center justify-between rounded-2xl border border-gray-100 bg-cream/40 p-3.5 sm:p-4 transition"
                >
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="h-14 w-auto object-contain" />
                    <div>
                      <h4 className="text-sm font-bold text-text">{item.name}</h4>
                      <p className="text-xs text-text-secondary">{item.size} • ₹{item.unitPrice} / bottle</p>
                      <p className="text-sm font-bold text-primary mt-1">₹{item.unitPrice * item.quantity}</p>
                    </div>
                  </div>

                  {/* Quantity Actions */}
                  <div className="flex flex-col items-end gap-2">
                    <button 
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                    
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-2 py-1">
                      <button 
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-600 hover:text-primary transition active:scale-90"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-600 hover:text-primary transition active:scale-90"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="border-t border-gray-100 bg-gray-50 p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between text-base font-bold text-text">
                <span>Subtotal</span>
                <span className="text-xl text-primary">₹{subtotal}</span>
              </div>

              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition active:scale-[0.98]"
              >
                <MessageCircle size={18} />
                Order Cart via WhatsApp
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={onClearCart}
                className="w-full text-center text-xs font-semibold text-gray-400 hover:text-gray-600 transition py-1"
              >
                Clear Cart
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}