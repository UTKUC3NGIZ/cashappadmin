import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { usersData } from "../data/Data";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

import Link from "next/link";

import "../app/globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Transactions() {
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
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const [value2, setValue2] = useState(50);
  useEffect(() => {
    usersData.getProducts().then((data) => setProducts(data));
  }, []);

  const hideAddBalanceDialog = () => {
    setDeleteProductDialog(false);
  };

  const confirmAddBalance = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const addBalance = () => {
    const newBalance = product.bakiye + value2;
    const updatedProducts = products.map((p) => {
      if (p.users === product.users) {
        return { ...p, bakiye: newBalance };
      }
      return p;
    });
  
    setProducts(updatedProducts);
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
  
    toast.current.show({
      severity: "success",
      summary: "Başarılı",
      detail: "Bakiye Başarıyla Yüklendi",
      life: 3000,
    });
  };
  
  const middleToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Link href="/transactions">
          <Button
            label="işlemler Dashboard"
            icon="pi pi-money-bill"
            severity="info"
          />
        </Link>
      </div>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-plus"
          rounded
          outlined
          severity="success"
          onClick={() => confirmAddBalance(rowData)}
        />
      </React.Fragment>
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 items-center justify-between">
      <h4 className="m-0">Kullanıcılar</h4>
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
  const addUserBalance = (
    <React.Fragment>
      <Button
        label="Vazgeç"
        icon="pi pi-times"
        outlined
        onClick={hideAddBalanceDialog}
      />
      <Button
        label="Yükle"
        icon="pi pi-check"
        severity="success"
        onClick={addBalance}
      />
    </React.Fragment>
  );

  return (
    <div>
      <Toast ref={toast} />
      <div className="card">
        <Toolbar className="mb-4" center={middleToolbarTemplate}></Toolbar>

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
        >
          <Column selectionMode="multiple" exportable={false}></Column>
          <Column
            field="users"
            header="Kullanıcı"
            sortable
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column
            field="bakiye"
            header="Bakiye"
            sortable
            style={{ minWidth: "16rem" }}
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
        header="Yükleme"
        modal
        footer={addUserBalance}
        onHide={hideAddBalanceDialog}
      >
        <span className="block text-center text-2xl mb-3">{product.users}</span>
        <div className="confirmation-content">
          {product && (
            <div className="flex-auto text-center">
              <InputNumber
                inputId="horizontal-buttons"
                value={value2}
                onValueChange={(e) => setValue2(e.value)}
                showButtons
                buttonLayout="horizontal"
                step={10}
                decrementButtonClassName="p-button-danger"
                incrementButtonClassName="p-button-success"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                mode="currency"
                currency="TRY"
              />
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
}
