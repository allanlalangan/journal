const EntryForm = () => {
	return (
		<section className='w-1/2 bg-slate-100 p-4'>
			<h2 className='mb-2 text-2xl'>New Journal Entry</h2>
			<form className='flex flex-col'>
				<fieldset className='mb-2 flex flex-col'>
					<label className='text-lg' htmlFor='title'>
						Entry Title
					</label>
					<input
						className='border border-slate-300 p-2'
						type='text'
						id='title'
						name='title'
					/>
				</fieldset>
				<fieldset className='mb-4 flex flex-col'>
					<label className='text-lg' htmlFor='entry'>
						Journal Entry
					</label>
					<textarea
						className='border border-slate-300 p-2'
						id='entry'
						name='entry'
						rows={7}
					/>
				</fieldset>
				<section className='grid grid-cols-12 gap-2'>
					<button
						className='col-span-6 bg-slate-500 px-4 py-2 tracking-wide text-gray-100 transition hover:bg-slate-600'
						type='submit'
					>
						Submit
					</button>
					<button
						className='col-span-6 bg-slate-500 px-4 py-2 tracking-wide text-gray-100 transition hover:bg-slate-600'
						type='reset'
					>
						Clear
					</button>
				</section>
			</form>
		</section>
	);
};
export default EntryForm;
