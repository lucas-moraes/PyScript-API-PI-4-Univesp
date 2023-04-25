import pandas as pd

def generate_select_school_name_data(df):
    school_name = pd.DataFrame(df, columns=['NOMESC'])
    school_name = school_name.groupby('NOMESC')['NOMESC'].count()
    return school_name.to_json()