
import streamlit as st
import pandas as pd

st.set_page_config(
    page_title="DilKeAnnS",
    page_icon="🎓",
    layout="wide"
)

@st.cache_data
def load_data():
    return pd.read_excel('DilKeAnnS_data_v2.xlsx', sheet_name=None)

data = load_data()

st.title("🎓 DilKeAnnS Career Saathi")
st.markdown("### **Data First Policy: 0% Judgement, 100% Data**")

search = st.text_input("🔍 Global Search", placeholder="MBBS, JEE, UPSC, CA")

if search:
    with st.spinner("Heart AI 6 dimaag chala raha hai..."):
        found = False
        for sheet_name, df in data.items():
            mask = df.astype(str).apply(lambda x: x.str.contains(search, case=False, na=False)).any(axis=1)
            result = df[mask]
            if not result.empty:
                st.success(f"Found in {sheet_name}:")
                st.dataframe(result, use_container_width=True)
                found = True
        if not found:
            st.error("I don't know. Data me nahi hai.")

st.divider()
col1, col2, col3 = st.columns(3)
with col1:
    st.button("🎓 EDUCATION", use_container_width=True, key="edu")
with col2:
    st.button("💼 BUSINESS", use_container_width=True, key="biz")
with col3:
    st.button("📝 JOBS", use_container_width=True, key="job")