import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Package, Truck, ShoppingCart, Plus, Pencil, Trash2, LogIn, Save, X, 
  Settings, FileText, CreditCard, LayoutDashboard, LogOut, Eye, EyeOff,
  CheckCircle, Clock, XCircle, DollarSign, Send
} from "lucide-react";

type Product = {
  id: string;
  name: string;
  nameLv: string | null;
  nameRu: string | null;
  nameEn: string | null;
  description: string | null;
  descriptionLv: string | null;
  descriptionRu: string | null;
  descriptionEn: string | null;
  price: string;
  discountPrice: string | null;
  imageUrl: string | null;
  isDigital: boolean | null;
  digitalFileUrl: string | null;
  digitalDownloadLink: string | null;
  stock: number | null;
  isActive: boolean | null;
};

type DeliveryOption = {
  id: string;
  name: string;
  nameLv: string | null;
  nameRu: string | null;
  nameEn: string | null;
  description: string | null;
  price: string;
  estimatedDays: number | null;
  isActive: boolean | null;
  isDigitalOnly: boolean | null;
  logoUrl: string | null;
};

type Order = {
  id: string;
  customerEmail: string;
  customerName: string;
  customerPhone: string | null;
  shippingAddress: string | null;
  deliveryOptionId: string | null;
  subtotal: string;
  deliveryPrice: string | null;
  total: string;
  status: string | null;
  isPaid: boolean | null;
  createdAt: string | null;
  items?: OrderItem[];
};

type OrderItem = {
  id: string;
  productName: string;
  quantity: number;
  price: string;
  isDigital: boolean | null;
};

type BlogPost = {
  id: string;
  title: string;
  titleLv: string | null;
  titleRu: string | null;
  titleEn: string | null;
  content: string;
  contentLv: string | null;
  contentRu: string | null;
  contentEn: string | null;
  slug: string;
  featuredImageUrl: string | null;
  isPublished: boolean | null;
  publishedAt: string | null;
  createdAt: string | null;
};

const getAuthHeaders = (password: string) => ({
  Authorization: `Basic ${btoa(`admin:${password}`)}`,
});

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "orders", label: "Pasūtījumi", icon: ShoppingCart },
  { id: "products", label: "Produkti", icon: Package },
  { id: "delivery", label: "Piegāde", icon: Truck },
  { id: "blog", label: "Blogs", icon: FileText },
  { id: "stripe", label: "Stripe", icon: CreditCard },
  { id: "settings", label: "Iestatījumi", icon: Settings },
];

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [activeSection, setActiveSection] = useState("dashboard");
  const { toast } = useToast();

  const checkAuth = async (pwd: string) => {
    const res = await fetch("/api/admin/auth", {
      headers: getAuthHeaders(pwd),
    });
    if (res.ok) {
      setIsAuthenticated(true);
      setLoginError("");
      sessionStorage.setItem("adminPwd", pwd);
    } else {
      setLoginError("Nepareiza parole");
    }
  };

  useEffect(() => {
    const savedPwd = sessionStorage.getItem("adminPwd");
    if (savedPwd) {
      setPassword(savedPwd);
      checkAuth(savedPwd);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminPwd");
    setPassword("");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-[#141414] border-[#2a2a2a]">
          <CardHeader>
            <CardTitle className="text-[#C0A07B] text-center text-2xl">D.O.M. CRM</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Parole</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#1a1a1a] border-[#333] text-white"
                placeholder="Ievadiet admin paroli"
                data-testid="input-admin-password"
                onKeyDown={(e) => e.key === "Enter" && checkAuth(password)}
              />
            </div>
            {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
            <Button
              onClick={() => checkAuth(password)}
              className="w-full bg-[#C0A07B] hover:bg-[#A08060] text-black"
              data-testid="button-login"
            >
              <LogIn className="w-4 h-4 mr-2" /> Ieiet
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      <aside className="w-64 bg-[#111111] border-r border-[#2a2a2a] flex flex-col">
        <div className="p-6 border-b border-[#2a2a2a]">
          <h1 className="text-xl font-bold text-[#C0A07B]">D.O.M. CRM</h1>
          <p className="text-xs text-gray-500 mt-1">Event Agency</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeSection === item.id
                  ? "bg-[#C0A07B] text-black"
                  : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
              }`}
              data-testid={`nav-${item.id}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#2a2a2a]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#1a1a1a] hover:text-white transition-colors"
            data-testid="button-logout"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Iziet</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {activeSection === "dashboard" && <DashboardSection password={password} />}
          {activeSection === "orders" && <OrdersSection password={password} />}
          {activeSection === "products" && <ProductsSection password={password} />}
          {activeSection === "delivery" && <DeliverySection password={password} />}
          {activeSection === "blog" && <BlogSection password={password} />}
          {activeSection === "stripe" && <StripeSection password={password} />}
          {activeSection === "settings" && <SettingsSection password={password} />}
        </div>
      </main>
    </div>
  );
}

function DashboardSection({ password }: { password: string }) {
  const { data: orders = [] } = useQuery<Order[]>({
    queryKey: ["admin-orders"],
    queryFn: async () => {
      const res = await fetch("/api/admin/orders", { headers: getAuthHeaders(password) });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
  });

  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["admin-products"],
    queryFn: async () => {
      const res = await fetch("/api/admin/products", { headers: getAuthHeaders(password) });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
  });

  const pendingOrders = orders.filter(o => o.status === "pending").length;
  const paidOrders = orders.filter(o => o.isPaid).length;
  const totalRevenue = orders.filter(o => o.isPaid).reduce((sum, o) => sum + parseFloat(o.total), 0);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-[#141414] border-[#2a2a2a]">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Kopā pasūtījumi</p>
                <p className="text-2xl font-bold text-white">{orders.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#141414] border-[#2a2a2a]">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Gaida apstrādi</p>
                <p className="text-2xl font-bold text-white">{pendingOrders}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#141414] border-[#2a2a2a]">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Apmaksāti</p>
                <p className="text-2xl font-bold text-white">{paidOrders}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#141414] border-[#2a2a2a]">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#C0A07B]/20 rounded-lg">
                <DollarSign className="w-6 h-6 text-[#C0A07B]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Ieņēmumi</p>
                <p className="text-2xl font-bold text-white">€{totalRevenue.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#141414] border-[#2a2a2a]">
        <CardHeader>
          <CardTitle className="text-white">Pēdējie pasūtījumi</CardTitle>
        </CardHeader>
        <CardContent>
          {orders.length === 0 ? (
            <p className="text-gray-500">Nav pasūtījumu</p>
          ) : (
            <div className="space-y-3">
              {orders.slice(0, 5).map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg">
                  <div>
                    <p className="text-white font-medium">{order.customerName}</p>
                    <p className="text-sm text-gray-400">{order.customerEmail}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">€{order.total}</p>
                    <StatusBadge status={order.status} isPaid={order.isPaid} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function StatusBadge({ status, isPaid }: { status: string | null; isPaid: boolean | null }) {
  const getStatusConfig = () => {
    if (isPaid && status === "delivered") return { label: "Piegādāts", color: "bg-green-500/20 text-green-400" };
    if (isPaid && status === "shipped") return { label: "Nosūtīts", color: "bg-blue-500/20 text-blue-400" };
    if (isPaid) return { label: "Apmaksāts", color: "bg-emerald-500/20 text-emerald-400" };
    if (status === "cancelled") return { label: "Atcelts", color: "bg-red-500/20 text-red-400" };
    return { label: "Gaida", color: "bg-yellow-500/20 text-yellow-400" };
  };

  const config = getStatusConfig();
  return (
    <span className={`text-xs px-2 py-1 rounded ${config.color}`}>
      {config.label}
    </span>
  );
}

function OrdersSection({ password }: { password: string }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const { data: orders = [], isLoading } = useQuery<Order[]>({
    queryKey: ["admin-orders"],
    queryFn: async () => {
      const res = await fetch("/api/admin/orders", { headers: getAuthHeaders(password) });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, ...data }: { id: string; status?: string; isPaid?: boolean }) => {
      const res = await fetch(`/api/admin/orders/${id}`, {
        method: "PATCH",
        headers: { ...getAuthHeaders(password), "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-orders"] });
      toast({ title: "Pasūtījums atjaunināts" });
    },
  });

  const fetchOrderDetails = async (id: string) => {
    const res = await fetch(`/api/admin/orders/${id}`, { headers: getAuthHeaders(password) });
    if (res.ok) {
      const data = await res.json();
      setSelectedOrder(data);
    }
  };

  if (isLoading) return <div className="text-center py-8 text-white">Ielādē...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Pasūtījumi</h2>

      <div className="bg-[#141414] rounded-lg border border-[#2a2a2a] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#1a1a1a]">
            <tr>
              <th className="text-left p-4 text-gray-400 font-medium">Klients</th>
              <th className="text-left p-4 text-gray-400 font-medium">Summa</th>
              <th className="text-left p-4 text-gray-400 font-medium">Maksājuma statuss</th>
              <th className="text-left p-4 text-gray-400 font-medium">Pasūtījuma statuss</th>
              <th className="text-left p-4 text-gray-400 font-medium">Datums</th>
              <th className="text-right p-4 text-gray-400 font-medium">Darbības</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-[#2a2a2a] hover:bg-[#1a1a1a]">
                <td className="p-4">
                  <div>
                    <p className="text-white font-medium">{order.customerName}</p>
                    <p className="text-sm text-gray-400">{order.customerEmail}</p>
                  </div>
                </td>
                <td className="p-4 text-white font-bold">€{order.total}</td>
                <td className="p-4">
                  <Select
                    value={order.isPaid ? "paid" : "unpaid"}
                    onValueChange={(value) => updateMutation.mutate({ id: order.id, isPaid: value === "paid" })}
                  >
                    <SelectTrigger className="w-32 bg-[#1a1a1a] border-[#333] text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#333]">
                      <SelectItem value="unpaid" className="text-yellow-400">Neapmaksāts</SelectItem>
                      <SelectItem value="paid" className="text-green-400">Apmaksāts</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="p-4">
                  <Select
                    value={order.status || "pending"}
                    onValueChange={(value) => updateMutation.mutate({ id: order.id, status: value })}
                  >
                    <SelectTrigger className="w-36 bg-[#1a1a1a] border-[#333] text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#333]">
                      <SelectItem value="pending" className="text-yellow-400">Gaida</SelectItem>
                      <SelectItem value="paid" className="text-blue-400">Apmaksāts</SelectItem>
                      <SelectItem value="shipped" className="text-purple-400">Nosūtīts</SelectItem>
                      <SelectItem value="delivered" className="text-green-400">Piegādāts</SelectItem>
                      <SelectItem value="cancelled" className="text-red-400">Atcelts</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="p-4 text-gray-400">
                  {order.createdAt ? new Date(order.createdAt).toLocaleDateString("lv-LV") : "-"}
                </td>
                <td className="p-4 text-right">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => fetchOrderDetails(order.id)}
                    className="border-[#333] text-white hover:bg-[#333]"
                    data-testid={`view-order-${order.id}`}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {orders.length === 0 && (
          <p className="text-center py-8 text-gray-500">Nav pasūtījumu</p>
        )}
      </div>

      {selectedOrder && (
        <Dialog open onOpenChange={() => setSelectedOrder(null)}>
          <DialogContent className="bg-[#141414] border-[#2a2a2a] text-white max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-[#C0A07B]">Pasūtījuma detaļas</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Klients</p>
                  <p className="text-white">{selectedOrder.customerName}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">E-pasts</p>
                  <p className="text-white">{selectedOrder.customerEmail}</p>
                </div>
                {selectedOrder.customerPhone && (
                  <div>
                    <p className="text-gray-400 text-sm">Telefons</p>
                    <p className="text-white">{selectedOrder.customerPhone}</p>
                  </div>
                )}
                {selectedOrder.shippingAddress && (
                  <div className="col-span-2">
                    <p className="text-gray-400 text-sm">Adrese</p>
                    <p className="text-white">{selectedOrder.shippingAddress}</p>
                  </div>
                )}
              </div>
              
              {selectedOrder.items && selectedOrder.items.length > 0 && (
                <div>
                  <p className="text-gray-400 text-sm mb-2">Preces</p>
                  <div className="space-y-2">
                    {selectedOrder.items.map((item) => (
                      <div key={item.id} className="flex justify-between p-2 bg-[#1a1a1a] rounded">
                        <span className="text-white">{item.productName} x{item.quantity}</span>
                        <span className="text-[#C0A07B]">€{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-4 border-t border-[#2a2a2a]">
                <span className="text-gray-400">Kopā:</span>
                <span className="text-xl font-bold text-[#C0A07B]">€{selectedOrder.total}</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

function ProductsSection({ password }: { password: string }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["admin-products"],
    queryFn: async () => {
      const res = await fetch("/api/admin/products", { headers: getAuthHeaders(password) });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
  });

  const createMutation = useMutation({
    mutationFn: async (product: Partial<Product>) => {
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: { ...getAuthHeaders(password), "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      setIsCreating(false);
      toast({ title: "Produkts izveidots" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, ...data }: Partial<Product> & { id: string }) => {
      const res = await fetch(`/api/admin/products/${id}`, {
        method: "PATCH",
        headers: { ...getAuthHeaders(password), "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      setEditingProduct(null);
      toast({ title: "Produkts atjaunināts" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/admin/products/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(password),
      });
      if (!res.ok) throw new Error("Failed");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      toast({ title: "Produkts dzēsts" });
    },
  });

  if (isLoading) return <div className="text-center py-8 text-white">Ielādē...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Produkti ({products.length})</h2>
        <Button
          onClick={() => setIsCreating(true)}
          className="bg-[#C0A07B] hover:bg-[#A08060] text-black"
          data-testid="button-add-product"
        >
          <Plus className="w-4 h-4 mr-2" /> Pievienot produktu
        </Button>
      </div>

      <div className="grid gap-4">
        {products.map((product) => (
          <Card key={product.id} className="bg-[#141414] border-[#2a2a2a]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {product.imageUrl && (
                    <img src={product.imageUrl} alt="" className="w-16 h-16 object-cover rounded" />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{product.name}</h3>
                      {!product.isActive && (
                        <span className="text-xs bg-red-900/50 text-red-300 px-2 py-0.5 rounded">Neaktīvs</span>
                      )}
                      {product.isDigital && (
                        <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded">Digitāls</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                      <span className="text-[#C0A07B] font-bold">€{product.price}</span>
                      {product.discountPrice && (
                        <span className="text-green-400">Atlaide: €{product.discountPrice}</span>
                      )}
                      {!product.isDigital && <span>Noliktavā: {product.stock || 0}</span>}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingProduct(product)}
                    className="border-[#333] text-white hover:bg-[#333]"
                    data-testid={`edit-product-${product.id}`}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => deleteMutation.mutate(product.id)}
                    className="border-red-800 text-red-400 hover:bg-red-900/50"
                    data-testid={`delete-product-${product.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {(isCreating || editingProduct) && (
        <ProductForm
          product={editingProduct}
          onClose={() => {
            setIsCreating(false);
            setEditingProduct(null);
          }}
          onSubmit={(data) => {
            if (editingProduct) {
              updateMutation.mutate({ id: editingProduct.id, ...data });
            } else {
              createMutation.mutate(data);
            }
          }}
        />
      )}
    </div>
  );
}

function ProductForm({
  product,
  onClose,
  onSubmit,
}: {
  product: Product | null;
  onClose: () => void;
  onSubmit: (data: Partial<Product>) => void;
}) {
  const [form, setForm] = useState({
    name: product?.name || "",
    nameLv: product?.nameLv || "",
    nameRu: product?.nameRu || "",
    nameEn: product?.nameEn || "",
    description: product?.description || "",
    descriptionLv: product?.descriptionLv || "",
    descriptionRu: product?.descriptionRu || "",
    descriptionEn: product?.descriptionEn || "",
    price: product?.price || "",
    discountPrice: product?.discountPrice || "",
    imageUrl: product?.imageUrl || "",
    isDigital: product?.isDigital || false,
    digitalFileUrl: product?.digitalFileUrl || "",
    digitalDownloadLink: product?.digitalDownloadLink || "",
    stock: product?.stock?.toString() || "0",
    isActive: product?.isActive ?? true,
  });

  const handleSubmit = () => {
    onSubmit({
      ...form,
      stock: parseInt(form.stock) || 0,
      discountPrice: form.discountPrice || null,
      digitalFileUrl: form.digitalFileUrl || null,
      digitalDownloadLink: form.digitalDownloadLink || null,
    });
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="bg-[#141414] border-[#2a2a2a] text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#C0A07B]">
            {product ? "Rediģēt produktu" : "Jauns produkts"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Nosaukums</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
                data-testid="input-product-name"
              />
            </div>
            <div className="space-y-2">
              <Label>Cena (€)</Label>
              <Input
                type="number"
                step="0.01"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
                data-testid="input-product-price"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Nosaukums LV</Label>
              <Input
                value={form.nameLv}
                onChange={(e) => setForm({ ...form, nameLv: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
              />
            </div>
            <div className="space-y-2">
              <Label>Nosaukums RU</Label>
              <Input
                value={form.nameRu}
                onChange={(e) => setForm({ ...form, nameRu: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
              />
            </div>
            <div className="space-y-2">
              <Label>Nosaukums EN</Label>
              <Input
                value={form.nameEn}
                onChange={(e) => setForm({ ...form, nameEn: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Apraksts</Label>
            <Textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="bg-[#1a1a1a] border-[#333]"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Apraksts LV</Label>
              <Textarea
                value={form.descriptionLv}
                onChange={(e) => setForm({ ...form, descriptionLv: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label>Apraksts RU</Label>
              <Textarea
                value={form.descriptionRu}
                onChange={(e) => setForm({ ...form, descriptionRu: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label>Apraksts EN</Label>
              <Textarea
                value={form.descriptionEn}
                onChange={(e) => setForm({ ...form, descriptionEn: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
                rows={2}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Atlaide (€)</Label>
              <Input
                type="number"
                step="0.01"
                value={form.discountPrice}
                onChange={(e) => setForm({ ...form, discountPrice: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
                placeholder="Atstāt tukšu ja nav atlaides"
              />
            </div>
            <div className="space-y-2">
              <Label>Attēla URL</Label>
              <Input
                value={form.imageUrl}
                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-[#333]">
              <Label>Digitāls produkts</Label>
              <Switch
                checked={form.isDigital}
                onCheckedChange={(checked) => setForm({ ...form, isDigital: checked })}
                data-testid="switch-is-digital"
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-[#333]">
              <Label>Aktīvs</Label>
              <Switch
                checked={form.isActive}
                onCheckedChange={(checked) => setForm({ ...form, isActive: checked })}
                data-testid="switch-is-active"
              />
            </div>
          </div>

          {form.isDigital ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Digitālā faila URL</Label>
                <Input
                  value={form.digitalFileUrl}
                  onChange={(e) => setForm({ ...form, digitalFileUrl: e.target.value })}
                  className="bg-[#1a1a1a] border-[#333]"
                  placeholder="https://..."
                />
              </div>
              <div className="space-y-2">
                <Label>Lejupielādes saite</Label>
                <Input
                  value={form.digitalDownloadLink}
                  onChange={(e) => setForm({ ...form, digitalDownloadLink: e.target.value })}
                  className="bg-[#1a1a1a] border-[#333]"
                  placeholder="https://..."
                />
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <Label>Noliktava</Label>
              <Input
                type="number"
                value={form.stock}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
                className="bg-[#1a1a1a] border-[#333] w-32"
              />
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="border-[#333]">
            <X className="w-4 h-4 mr-2" /> Atcelt
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-[#C0A07B] hover:bg-[#A08060] text-black"
            data-testid="button-save-product"
          >
            <Save className="w-4 h-4 mr-2" /> Saglabāt
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function DeliverySection({ password }: { password: string }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [editingOption, setEditingOption] = useState<DeliveryOption | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const { data: options = [], isLoading } = useQuery<DeliveryOption[]>({
    queryKey: ["admin-delivery"],
    queryFn: async () => {
      const res = await fetch("/api/admin/delivery-options", { headers: getAuthHeaders(password) });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
  });

  const createMutation = useMutation({
    mutationFn: async (option: Partial<DeliveryOption>) => {
      const res = await fetch("/api/admin/delivery-options", {
        method: "POST",
        headers: { ...getAuthHeaders(password), "Content-Type": "application/json" },
        body: JSON.stringify(option),
      });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-delivery"] });
      setIsCreating(false);
      toast({ title: "Piegādes opcija izveidota" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, ...data }: Partial<DeliveryOption> & { id: string }) => {
      const res = await fetch(`/api/admin/delivery-options/${id}`, {
        method: "PATCH",
        headers: { ...getAuthHeaders(password), "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-delivery"] });
      setEditingOption(null);
      toast({ title: "Piegādes opcija atjaunināta" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/admin/delivery-options/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(password),
      });
      if (!res.ok) throw new Error("Failed");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-delivery"] });
      toast({ title: "Piegādes opcija dzēsta" });
    },
  });

  if (isLoading) return <div className="text-center py-8 text-white">Ielādē...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Piegādes opcijas ({options.length})</h2>
        <Button
          onClick={() => setIsCreating(true)}
          className="bg-[#C0A07B] hover:bg-[#A08060] text-black"
          data-testid="button-add-delivery"
        >
          <Plus className="w-4 h-4 mr-2" /> Pievienot opciju
        </Button>
      </div>

      <div className="grid gap-4">
        {options.map((option) => (
          <Card key={option.id} className="bg-[#141414] border-[#2a2a2a]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {option.logoUrl && (
                    <img src={option.logoUrl} alt="" className="w-12 h-12 object-contain" />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{option.name}</h3>
                      {!option.isActive && (
                        <span className="text-xs bg-red-900/50 text-red-300 px-2 py-0.5 rounded">Neaktīvs</span>
                      )}
                      {option.isDigitalOnly && (
                        <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded">Tikai digitāliem</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                      <span className="text-[#C0A07B] font-bold">€{option.price}</span>
                      {option.estimatedDays && (
                        <span>{option.estimatedDays} dienas</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingOption(option)}
                    className="border-[#333] text-white hover:bg-[#333]"
                    data-testid={`edit-delivery-${option.id}`}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => deleteMutation.mutate(option.id)}
                    className="border-red-800 text-red-400 hover:bg-red-900/50"
                    data-testid={`delete-delivery-${option.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {(isCreating || editingOption) && (
        <DeliveryForm
          option={editingOption}
          onClose={() => {
            setIsCreating(false);
            setEditingOption(null);
          }}
          onSubmit={(data) => {
            if (editingOption) {
              updateMutation.mutate({ id: editingOption.id, ...data });
            } else {
              createMutation.mutate(data);
            }
          }}
        />
      )}
    </div>
  );
}

function DeliveryForm({
  option,
  onClose,
  onSubmit,
}: {
  option: DeliveryOption | null;
  onClose: () => void;
  onSubmit: (data: Partial<DeliveryOption>) => void;
}) {
  const [form, setForm] = useState({
    name: option?.name || "",
    nameLv: option?.nameLv || "",
    nameRu: option?.nameRu || "",
    nameEn: option?.nameEn || "",
    description: option?.description || "",
    price: option?.price || "0",
    estimatedDays: option?.estimatedDays?.toString() || "",
    isActive: option?.isActive ?? true,
    isDigitalOnly: option?.isDigitalOnly || false,
    logoUrl: option?.logoUrl || "",
  });

  const handleSubmit = () => {
    onSubmit({
      ...form,
      estimatedDays: form.estimatedDays ? parseInt(form.estimatedDays) : null,
      logoUrl: form.logoUrl || null,
    });
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="bg-[#141414] border-[#2a2a2a] text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-[#C0A07B]">
            {option ? "Rediģēt piegādes opciju" : "Jauna piegādes opcija"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Nosaukums</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
              />
            </div>
            <div className="space-y-2">
              <Label>Cena (€)</Label>
              <Input
                type="number"
                step="0.01"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>LV</Label>
              <Input
                value={form.nameLv}
                onChange={(e) => setForm({ ...form, nameLv: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
              />
            </div>
            <div className="space-y-2">
              <Label>RU</Label>
              <Input
                value={form.nameRu}
                onChange={(e) => setForm({ ...form, nameRu: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
              />
            </div>
            <div className="space-y-2">
              <Label>EN</Label>
              <Input
                value={form.nameEn}
                onChange={(e) => setForm({ ...form, nameEn: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Apraksts</Label>
            <Textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="bg-[#1a1a1a] border-[#333]"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Piegādes dienas</Label>
              <Input
                type="number"
                value={form.estimatedDays}
                onChange={(e) => setForm({ ...form, estimatedDays: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
              />
            </div>
            <div className="space-y-2">
              <Label>Logo URL</Label>
              <Input
                value={form.logoUrl}
                onChange={(e) => setForm({ ...form, logoUrl: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-[#333]">
              <Label>Aktīvs</Label>
              <Switch
                checked={form.isActive}
                onCheckedChange={(checked) => setForm({ ...form, isActive: checked })}
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-[#333]">
              <Label>Tikai digitāliem</Label>
              <Switch
                checked={form.isDigitalOnly}
                onCheckedChange={(checked) => setForm({ ...form, isDigitalOnly: checked })}
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="border-[#333]">
            <X className="w-4 h-4 mr-2" /> Atcelt
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-[#C0A07B] hover:bg-[#A08060] text-black"
          >
            <Save className="w-4 h-4 mr-2" /> Saglabāt
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function BlogSection({ password }: { password: string }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["admin-blog"],
    queryFn: async () => {
      const res = await fetch("/api/admin/blog", { headers: getAuthHeaders(password) });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
  });

  const createMutation = useMutation({
    mutationFn: async (post: Partial<BlogPost>) => {
      const res = await fetch("/api/admin/blog", {
        method: "POST",
        headers: { ...getAuthHeaders(password), "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-blog"] });
      setIsCreating(false);
      toast({ title: "Bloga ieraksts izveidots" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, ...data }: Partial<BlogPost> & { id: string }) => {
      const res = await fetch(`/api/admin/blog/${id}`, {
        method: "PATCH",
        headers: { ...getAuthHeaders(password), "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-blog"] });
      setEditingPost(null);
      toast({ title: "Bloga ieraksts atjaunināts" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/admin/blog/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(password),
      });
      if (!res.ok) throw new Error("Failed");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-blog"] });
      toast({ title: "Bloga ieraksts dzēsts" });
    },
  });

  if (isLoading) return <div className="text-center py-8 text-white">Ielādē...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Bloga ieraksti ({posts.length})</h2>
        <Button
          onClick={() => setIsCreating(true)}
          className="bg-[#C0A07B] hover:bg-[#A08060] text-black"
          data-testid="button-add-blog"
        >
          <Plus className="w-4 h-4 mr-2" /> Jauns ieraksts
        </Button>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="bg-[#141414] border-[#2a2a2a]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {post.featuredImageUrl && (
                    <img src={post.featuredImageUrl} alt="" className="w-20 h-14 object-cover rounded" />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{post.title}</h3>
                      {post.isPublished ? (
                        <span className="text-xs bg-green-900/50 text-green-300 px-2 py-0.5 rounded flex items-center gap-1">
                          <Eye className="w-3 h-3" /> Publicēts
                        </span>
                      ) : (
                        <span className="text-xs bg-gray-900/50 text-gray-300 px-2 py-0.5 rounded flex items-center gap-1">
                          <EyeOff className="w-3 h-3" /> Melnraksts
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400 mt-1">/{post.slug}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingPost(post)}
                    className="border-[#333] text-white hover:bg-[#333]"
                    data-testid={`edit-blog-${post.id}`}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => deleteMutation.mutate(post.id)}
                    className="border-red-800 text-red-400 hover:bg-red-900/50"
                    data-testid={`delete-blog-${post.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {posts.length === 0 && (
          <p className="text-center py-8 text-gray-500">Nav bloga ierakstu</p>
        )}
      </div>

      {(isCreating || editingPost) && (
        <BlogForm
          post={editingPost}
          onClose={() => {
            setIsCreating(false);
            setEditingPost(null);
          }}
          onSubmit={(data) => {
            if (editingPost) {
              updateMutation.mutate({ id: editingPost.id, ...data });
            } else {
              createMutation.mutate(data);
            }
          }}
        />
      )}
    </div>
  );
}

function BlogForm({
  post,
  onClose,
  onSubmit,
}: {
  post: BlogPost | null;
  onClose: () => void;
  onSubmit: (data: Partial<BlogPost>) => void;
}) {
  const [form, setForm] = useState({
    title: post?.title || "",
    titleLv: post?.titleLv || "",
    titleRu: post?.titleRu || "",
    titleEn: post?.titleEn || "",
    content: post?.content || "",
    contentLv: post?.contentLv || "",
    contentRu: post?.contentRu || "",
    contentEn: post?.contentEn || "",
    slug: post?.slug || "",
    featuredImageUrl: post?.featuredImageUrl || "",
    isPublished: post?.isPublished || false,
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const handleSubmit = () => {
    onSubmit({
      ...form,
      slug: form.slug || generateSlug(form.title),
      publishedAt: form.isPublished ? new Date().toISOString() : null,
      featuredImageUrl: form.featuredImageUrl || null,
    });
  };

  const insertHeading = (level: number) => {
    const prefix = "#".repeat(level) + " ";
    setForm({ ...form, content: form.content + "\n" + prefix });
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="bg-[#141414] border-[#2a2a2a] text-white max-w-4xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#C0A07B]">
            {post ? "Rediģēt ierakstu" : "Jauns bloga ieraksts"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Virsraksts</Label>
              <Input
                value={form.title}
                onChange={(e) => {
                  setForm({ 
                    ...form, 
                    title: e.target.value,
                    slug: form.slug || generateSlug(e.target.value)
                  });
                }}
                className="bg-[#1a1a1a] border-[#333]"
                data-testid="input-blog-title"
              />
            </div>
            <div className="space-y-2">
              <Label>URL Slug</Label>
              <Input
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
                placeholder="auto-generated-from-title"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Virsraksts LV</Label>
              <Input
                value={form.titleLv}
                onChange={(e) => setForm({ ...form, titleLv: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
              />
            </div>
            <div className="space-y-2">
              <Label>Virsraksts RU</Label>
              <Input
                value={form.titleRu}
                onChange={(e) => setForm({ ...form, titleRu: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
              />
            </div>
            <div className="space-y-2">
              <Label>Virsraksts EN</Label>
              <Input
                value={form.titleEn}
                onChange={(e) => setForm({ ...form, titleEn: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Saturs (Markdown)</Label>
              <div className="flex gap-1">
                <Button size="sm" variant="outline" onClick={() => insertHeading(1)} className="border-[#333] text-xs px-2">H1</Button>
                <Button size="sm" variant="outline" onClick={() => insertHeading(2)} className="border-[#333] text-xs px-2">H2</Button>
                <Button size="sm" variant="outline" onClick={() => insertHeading(3)} className="border-[#333] text-xs px-2">H3</Button>
                <Button size="sm" variant="outline" onClick={() => insertHeading(4)} className="border-[#333] text-xs px-2">H4</Button>
              </div>
            </div>
            <Textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="bg-[#1a1a1a] border-[#333] font-mono"
              rows={10}
              placeholder="# Virsraksts&#10;&#10;Rakstiet šeit..."
              data-testid="input-blog-content"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Saturs LV</Label>
              <Textarea
                value={form.contentLv}
                onChange={(e) => setForm({ ...form, contentLv: e.target.value })}
                className="bg-[#1a1a1a] border-[#333] font-mono"
                rows={6}
              />
            </div>
            <div className="space-y-2">
              <Label>Saturs RU</Label>
              <Textarea
                value={form.contentRu}
                onChange={(e) => setForm({ ...form, contentRu: e.target.value })}
                className="bg-[#1a1a1a] border-[#333] font-mono"
                rows={6}
              />
            </div>
            <div className="space-y-2">
              <Label>Saturs EN</Label>
              <Textarea
                value={form.contentEn}
                onChange={(e) => setForm({ ...form, contentEn: e.target.value })}
                className="bg-[#1a1a1a] border-[#333] font-mono"
                rows={6}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Galvenā attēla URL</Label>
              <Input
                value={form.featuredImageUrl}
                onChange={(e) => setForm({ ...form, featuredImageUrl: e.target.value })}
                className="bg-[#1a1a1a] border-[#333]"
                placeholder="https://..."
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-[#333]">
              <Label>Publicēts</Label>
              <Switch
                checked={form.isPublished}
                onCheckedChange={(checked) => setForm({ ...form, isPublished: checked })}
                data-testid="switch-is-published"
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="border-[#333]">
            <X className="w-4 h-4 mr-2" /> Atcelt
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-[#C0A07B] hover:bg-[#A08060] text-black"
            data-testid="button-save-blog"
          >
            <Save className="w-4 h-4 mr-2" /> Saglabāt
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function StripeSection({ password }: { password: string }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [stripeKey, setStripeKey] = useState("");
  const [stripeWebhookSecret, setStripeWebhookSecret] = useState("");
  const [showKey, setShowKey] = useState(false);

  const { data: settings = {} } = useQuery<Record<string, string>>({
    queryKey: ["admin-settings"],
    queryFn: async () => {
      const res = await fetch("/api/admin/settings", { headers: getAuthHeaders(password) });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
  });

  useEffect(() => {
    if (settings.stripe_secret_key) setStripeKey(settings.stripe_secret_key);
    if (settings.stripe_webhook_secret) setStripeWebhookSecret(settings.stripe_webhook_secret);
  }, [settings]);

  const saveMutation = useMutation({
    mutationFn: async (data: Record<string, string>) => {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { ...getAuthHeaders(password), "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-settings"] });
      toast({ title: "Stripe iestatījumi saglabāti" });
    },
  });

  const handleSave = () => {
    saveMutation.mutate({
      stripe_secret_key: stripeKey,
      stripe_webhook_secret: stripeWebhookSecret,
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Stripe Iestatījumi</h2>

      <Card className="bg-[#141414] border-[#2a2a2a]">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#C0A07B]" />
            API Atslēgas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              Lai iespējotu Stripe maksājumus, ievadiet savas Stripe API atslēgas. 
              Atslēgas var atrast savā Stripe Dashboard → Developers → API keys.
            </p>
          </div>

          <div className="space-y-2">
            <Label className="text-white">Secret Key</Label>
            <div className="flex gap-2">
              <Input
                type={showKey ? "text" : "password"}
                value={stripeKey}
                onChange={(e) => setStripeKey(e.target.value)}
                className="bg-[#1a1a1a] border-[#333] text-white font-mono"
                placeholder="sk_live_..."
                data-testid="input-stripe-key"
              />
              <Button
                variant="outline"
                onClick={() => setShowKey(!showKey)}
                className="border-[#333] text-white"
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-white">Webhook Secret</Label>
            <Input
              type="password"
              value={stripeWebhookSecret}
              onChange={(e) => setStripeWebhookSecret(e.target.value)}
              className="bg-[#1a1a1a] border-[#333] text-white font-mono"
              placeholder="whsec_..."
              data-testid="input-stripe-webhook"
            />
          </div>

          <Button
            onClick={handleSave}
            className="bg-[#C0A07B] hover:bg-[#A08060] text-black"
            disabled={saveMutation.isPending}
            data-testid="button-save-stripe"
          >
            <Save className="w-4 h-4 mr-2" /> Saglabāt
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-[#141414] border-[#2a2a2a]">
        <CardHeader>
          <CardTitle className="text-white">Webhook URL</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-3 bg-[#1a1a1a] rounded-lg font-mono text-sm text-gray-300">
            {window.location.origin}/api/stripe/webhook
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Pievienojiet šo URL savā Stripe Dashboard → Webhooks
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function SettingsSection({ password }: { password: string }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [blogInMenu, setBlogInMenu] = useState(false);

  const { data: settings = {} } = useQuery<Record<string, string>>({
    queryKey: ["admin-settings"],
    queryFn: async () => {
      const res = await fetch("/api/admin/settings", { headers: getAuthHeaders(password) });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
  });

  useEffect(() => {
    setBlogInMenu(settings.blog_in_menu === "true");
  }, [settings]);

  const saveMutation = useMutation({
    mutationFn: async (data: Record<string, string>) => {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { ...getAuthHeaders(password), "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-settings"] });
      toast({ title: "Iestatījumi saglabāti" });
    },
  });

  const handleBlogToggle = (checked: boolean) => {
    setBlogInMenu(checked);
    saveMutation.mutate({ blog_in_menu: checked.toString() });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Iestatījumi</h2>

      <Card className="bg-[#141414] border-[#2a2a2a]">
        <CardHeader>
          <CardTitle className="text-white">Menu Iestatījumi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg">
            <div>
              <p className="text-white font-medium">Pievienot blogu pie menu</p>
              <p className="text-sm text-gray-400">Kad ieslēgts, blogs būs redzams galvenajā navigācijā</p>
            </div>
            <Switch
              checked={blogInMenu}
              onCheckedChange={handleBlogToggle}
              data-testid="switch-blog-menu"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
