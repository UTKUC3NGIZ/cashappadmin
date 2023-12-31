import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { TransactionsData } from "../data/Data";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import axios from "axios";
import "../app/globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Transactions({ isLoggedIn, transfers, token }) {
  let emptyProduct = {
    id: null,
    name: "",
    image: null,
    description: "",
    category: null,
    price: 0,
    quantity: 0,
    rating: 0,
    inventoryStatus: "INSTOCK",
  };

  const [products, setProducts] = useState(null);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const data = await TransactionsData.getProducts({ transfers });
      setProducts(data);
    }

    fetchData();
  }, [transfers]);

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    const updatedProducts = products.filter(
      (val) =>
        val.paraGonderen !== product.paraGonderen ||
        val.parayiAlan !== product.parayiAlan
    );

    setProducts(updatedProducts);
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
    toast.current.show({
      severity: "success",
      summary: "Başarılı",
      detail: "Kullanıcı İşlemi İptal Edildi",
      life: 3000,
    });
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };
  const deleteSelectedProducts = () => {
    // Update the product locally
    let _products = products.filter((val) => !selectedProducts.includes(val));
    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts(null);

    // Make the PUT request with the token
    const userId = product.id; // Replace with the user's ID
    const url = `https://mobil-bank-production.up.railway.app/transfers/${userId}`;

    axios
      .put(url, {}, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        // Handle the success response
        toast.current.show({
          severity: "success",
          summary: "Başarılı",
          detail: "Kullanıcı İşlemleri Başarıyla Silindi",
          life: 3000,
        });
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  };
  // exit
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  const middleToolbarTemplate = () => {
    return (
      <div className="flex gap-5">
        <div className="flex flex-wrap gap-2">
          <Link href="/addBalance">
            <Button
              label="Bakiye Dashboard"
              icon="pi pi-money-bill"
              severity="info"
            />
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/">
            <Button
              label="Çıkış"
              icon="pi pi-sign-out"
              severity="danger"
              onClick={handleLogout}
            />
          </Link>
        </div>
      </div>
    );
  };
  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Dışa Aktar"
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportCSV}
      />
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 items-center justify-between">
      <h4 className="m-0">Kullanıcı İşlem Detay Paneli</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Ara..."
        />
      </span>
    </div>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="Hayır"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Evet"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProduct}
      />
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="Hayır"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Evet"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  );
  return (
    <div className="">
      <Toast ref={toast} />
      <div className="card">
        <Toolbar
          className="mb-4"
          right={rightToolbarTemplate}
          left={middleToolbarTemplate}
        ></Toolbar>

        <DataTable
          ref={dt}
          value={products}
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="{totalRecords} üründen {first} ile {last} arası gösteriliyor"
          globalFilter={globalFilter}
          header={header}
          emptyMessage={"Yükleniyor..."}
        >
          <Column
            field="paraGonderen"
            header="Para Gönderen"
            sortable
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column
            field="parayiAlan"
            header="Parayı Alan"
            sortable
            style={{ minWidth: "16rem" }}
          ></Column>
          <Column
            field="islemMiktar"
            header="İşlem Miktarı"
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="islemTarih"
            header="İşlem Tarihi"
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="paraGonderenSonBakiye"
            header="Para Gönderen Son Bakiye"
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="paraAlanSonBakiye"
            header="Para Alan Son Bakiye"
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "12rem" }}
          ></Column>
        </DataTable>
      </div>

      <Dialog
        visible={deleteProductDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Onay"
        modal
        footer={deleteProductDialogFooter}
        onHide={hideDeleteProductDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {product && <span>İptal etmek istediğine emin misininiz ?</span>}
        </div>
      </Dialog>

      <Dialog
        visible={deleteProductsDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Onay"
        modal
        footer={deleteProductsDialogFooter}
        onHide={hideDeleteProductsDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {product && (
            <span>
              Seçilen işlemleri iptal etmek istediğinize emin misiniz?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  );
}
