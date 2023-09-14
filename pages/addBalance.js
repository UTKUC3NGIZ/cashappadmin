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
import axios from "axios";

import Link from "next/link";

import "../app/globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function AddBalance({ userList, isLoggedIn, token }) {
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
    async function fetchData() {
      const data = await usersData.getProducts({ userList });
      setProducts(data);
    }

    fetchData();
  }, [userList]);
  const hideAddBalanceDialog = () => {
    setDeleteProductDialog(false);
  };

  const confirmAddBalance = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const addBalance = () => {
    // Calculate the new balance
    const newBalance = product.amount + value2;
  
    // Update the product locally
    const updatedProducts = products.map((p) => {
      if (p.users === product.users) {
        return { ...p, amount: newBalance };
      }
      return p;
    });
  
    // Update the product state
    setProducts(updatedProducts);
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
  
    // Make the PUT request with the token
    const userId = product.id; // Replace with the user's ID
    const url = `https://mobil-bank-production.up.railway.app/users/add-money/${userId}?money=${newBalance}`;
  
    axios
      .put(url, {}, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        // Handle the success response
        toast.current.show({
          severity: 'success',
          summary: 'Başarılı',
          detail: 'Bakiye Başarıyla Yüklendi',
          life: 3000,
        });
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error);
      });
  };

  const middleToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Link href="/Transactions">
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
      <h4 className="m-0">Kullanıcı Para Ekleme Paneli</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          value={globalFilter || ""} // Use globalFilter or an empty string as the value
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Ara..."
        />
      </span>
    </div>
  );

  const clearGlobalFilter = () => {
    setGlobalFilter(null); // Reset the globalFilter to null
  };

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

        {products ? (
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
            onFilter={() => clearGlobalFilter()} // Clear filter when filtering is done
          >
            <Column
              field="users"
              header="Kullanıcı"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="amount"
              header="amount"
              sortable
              style={{ minWidth: "16rem" }}
            ></Column>
            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem" }}
            ></Column>
          </DataTable>
        ) : (
          <p>Veriler yükleniyor...</p>
        )}
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
